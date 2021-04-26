import styled, { css } from 'styled-components';
import useSRInfiniteQuery from '../../../hooks/useSRInfiniteQuery';
import { Loader } from '../../layout';
import dayjs from 'dayjs';
import { chunk } from '../../../helpers';
import { Col } from '../../styled-components';

const columns = 3;
export default function ChannelSchedule({ channel }) {
    const { data: programs, isSuccess, isLoading } = useSRInfiniteQuery(
        `channel/${channel.id}/tabla`,
        "http://api.sr.se/api/v2/scheduledepisodes",
        {
            channelid: channel.id,
            date: dayjs().format("YYYY-MM-DD"),
        }
    );

    function parseSRDate(date) {
        return date.match(/([0-9]+)/g)[0];
    }

    console.log(programs);

    return (
        <>
            {isLoading && <Loader />}
            <Programs>
                {isSuccess && programs.pages.map(page => (
                    chunk(page.data.schedule, columns).map((column, i) => (
                        <ProgramColumn key={i}>
                            {column.map((program, j) => (
                                <Program color={channel.color} key={`${i}${j}`} as="article">
                                    {program.title}
                                </Program>
                            ))}
                        </ProgramColumn>
                    ))
                ))}
            </Programs>
        </>
    );
}

const Programs = styled.div`
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    grid-gap: 15px;
    margin-top: 15px;
`;

const ProgramColumn = styled.div`
    
`;

const Program = styled(Col)`
    ${({ theme, color }) => css`
        border: 1px solid rgb(${theme.color.border});
        border-bottom: 4px solid #${color};
        background-color: rgb(${theme.color.bodyLight});
        border-bottom-left-radius: ${theme.borderRadius}px;
        border-bottom-right-radius: ${theme.borderRadius}px;
    `}
`;
