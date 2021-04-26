import styled from 'styled-components';
import useSRInfiniteQuery from '../../../hooks/useSRInfiniteQuery';
import { Loader } from '../../layout';
import dayjs from 'dayjs';
import { chunk } from '../../../helpers';

const columns = 3;
export default function ChannelSchedule({ channel }) {
    const { data: programs, isSuccess } = useSRInfiniteQuery(`channel/${channel.id}/tabla`, "http://api.sr.se/api/v2/scheduledepisodes", {
        channelid: channel.id,
        date: dayjs().format("YYYY-MM-DD"),
    });

    function parseSRDate(date) {
        return date.match(/([0-9]+)/g)[0];
    }

    console.log(programs);

    return (
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
    );
}

const Programs = styled.div`
    
`;

const ProgramColumn = styled.div`
    
`;

const Program = styled.div`
    
`;
