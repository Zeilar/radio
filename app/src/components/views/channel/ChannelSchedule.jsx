import useSRInfiniteQuery from '../../../hooks/useSRInfiniteQuery';
import { Loader } from '../../layout';
import dayjs from 'dayjs';
import { NavLink } from 'react-router-dom';
import * as Styles from './channel.styles';

export default function ChannelSchedule({ channel, formatForUrl }) {
    const { data, isSuccess, isLoading } = useSRInfiniteQuery(
        `channel/${channel.id}/tabla`,
        "https://api.sr.se/api/v2/scheduledepisodes",
        {
            channelid: channel.id,
            date: dayjs().format("YYYY-MM-DD"),
        }
    );

    if (isLoading) {
        return <Loader />;
    }

    function dateToHHMM(date) {
        return dayjs(new Date(Number(date.match(/([0-9]+)/g)[0]))).format("HH:mm");
    }

    return (
        <Styles.Programs>
            {isSuccess && data.pages.map(page => (
                page.data.schedule.map((program, j) => (
                    <Styles.Program color={channel.color} key={`${program.program.id}-${j}`} as="article">
                        <Styles.ProgramImage src={program.imageurltemplate} />
                        <Styles.ProgramCard>
                            <Styles.ProgramName as={NavLink} to={`/program/${program.program.id}/${formatForUrl(program.title)}`}>
                                {program.title}
                            </Styles.ProgramName>
                            <Styles.ProgramInfo>
                                {dateToHHMM(program.starttimeutc)} - {dateToHHMM(program.endtimeutc)}
                            </Styles.ProgramInfo>
                            <Styles.ProgramDescription>{program.description}</Styles.ProgramDescription>
                        </Styles.ProgramCard>
                    </Styles.Program>
                ))
            ))}
        </Styles.Programs>
    );
}
