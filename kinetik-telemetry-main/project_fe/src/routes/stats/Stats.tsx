import React from 'react';
import { useQuery, useQueryClient } from 'react-query'
import qs from 'query-string';
import { api } from 'utils/apiThunks'
import { useForm } from 'react-hook-form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'components/form/Form';
import FormGroup from 'components/form/FormGroup';
import { formatDate } from 'utils/formatters'
import LapDetails from './LapDetails';

interface IUserProps {
  id: number;
  email: string;
}

interface ISessionProps {
  id: number;
  weather: string;
  user_id: number;
  created_at: Date;
}

export interface ILapProps {
  id: number;
  time: number;
  session_id: number;
  created_at: Date;
}

const View = () => {
  const queryClient = useQueryClient();

  // Form methods
  const methods = useForm();
  const { watch, setValue } = methods;

  // Watch form values
  const userFieldVal = watch('user');
  const sessionFieldVal = watch('session');
  const lapFieldVal = watch('lap');

  // Fetch users
  const { isLoading: isLoadingUsers, error: errorUsers, data: dataUsers } = useQuery(
    'users',
    () => api.get('/users')
  )

  // Fetch sessions
  const { isLoading: isLoadingSessions, error: errorSessions, data: dataSessions } = useQuery(
    'sessions',
    () => api.get('/sessions')
  )

  // Fetch laps
  const { isLoading: isLoadingLaps, error: errorLaps, data: dataLaps } = useQuery(
    'laps',
    () => api.get('/laps')
  );

  if (isLoadingUsers || isLoadingSessions || isLoadingLaps) return <p>Loading</p>

  if (errorUsers || errorSessions || errorLaps) return <p>Error</p>

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <h1>Stats</h1>
          </Col>
        </Row>
        <Form
          className="mt-4"
          methods={methods}
        >
          <Row>
            <Col xs={12} md={4}>
              <FormGroup
                controlId="formGroupUsers"
                label="Select user"
                type="select"
                as="select"
                name="user"
                isRequired
                isClearable
                isSearchable
                onChange={e => {
                  // Build query string
                  const sessionsQueryString = qs.stringify(
                    { user_id: e ? e.value : null },
                    { skipNull: true }
                  );

                  //Reset dropdowns
                  setValue('session', null)
                  setValue('lap', null)

                  // Refetch sessions
                  queryClient.fetchQuery(
                    'sessions',
                    () => api.get(`/sessions?${sessionsQueryString}`)
                  );
                }}
                selectOptions={dataUsers.map((user: IUserProps) => ({
                  value: user.id,
                  label: user.email,
                }))}
              />
            </Col>
            <Col xs={12} md={4}>
              <FormGroup
                controlId="formGroupSessions"
                label="Select session"
                type="select"
                as="select"
                name="session"
                isRequired
                isDisabled={!userFieldVal}
                isClearable
                isSearchable
                onChange={(e: any) => {
                  // Build query string
                  const lapsQueryString = qs.stringify(
                    { session_id: e ? e.value : null },
                    { skipNull: true }
                  );

                  //Reset dropdowns
                  setValue('lap', null)

                  // Refetch laps
                  queryClient.fetchQuery(
                    'laps',
                    () => api.get(`/laps?${lapsQueryString}`)
                  );
                }}
                selectOptions={dataSessions.map((session: ISessionProps) => ({
                  value: session.id,
                  label: `${session.id} - ${formatDate(new Date(session.created_at), 'dd.mm.Y hh:ii:ss')}`,
                }))}
              />
            </Col>
            <Col xs={12} md={4}>
              <FormGroup
                controlId="formGroupLaps"
                label="Select lap"
                type="select"
                as="select"
                name="lap"
                isRequired
                isDisabled={!sessionFieldVal}
                isClearable
                isSearchable
                selectOptions={dataLaps.map((lap: ILapProps) => ({
                  value: lap.id,
                  label: `${lap.id} - ${formatDate(new Date(lap.created_at), 'dd.mm.Y hh:ii:ss')}`,
                }))}
              />
            </Col>
          </Row>
        </Form>
        <LapDetails
          lapId={lapFieldVal ? lapFieldVal.value : null}
          sessionId={sessionFieldVal ? sessionFieldVal.value : null}
        />
      </Container>
    </>
  );
};

export default View;
