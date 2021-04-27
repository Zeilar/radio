import useSRInfiniteQuery from '../../../hooks/useSRInfiniteQuery';
import { Loader } from '../../layout';
import dayjs from 'dayjs';
import { chunk } from '../../../helpers';
import { NavLink } from 'react-router-dom';
import { mdiHeart } from '@mdi/js';
import Icon from '@mdi/react';
import * as Styles from './channel.styles';

export default function ChannelSchedule({ channel, formatForUrl }) {
    const columns = 3;

    const { data: programs, isSuccess, isLoading } = useSRInfiniteQuery(
        `channel/${channel.id}/tabla`,
        "http://api.sr.se/api/v2/scheduledepisodes",
        {
            channelid: channel.id,
            date: dayjs().format("YYYY-MM-DD"),
        }
    );

    function dateToHHMM(date) {
        return dayjs(new Date(Number(date.match(/([0-9]+)/g)[0]))).format("HH:mm");
    }

    console.log(programs?.pages[0]?.data?.schedule);

    return (
        <>
            {isLoading && <Loader />}
            <Styles.Programs columns={columns}>
                {isSuccess && programs.pages.map(page => (
                    chunk(page.data.schedule, columns).map((column, i) => (
                        <Styles.ProgramColumn key={i}>
                            {column.map((program, j) => (
                                <Styles.Program color={channel.color} key={`${program.program.id}-${j}`} as="article">
                                    <Icon path={mdiHeart} size={1} style={{ position: "absolute", right: 10, top: 10, color: "red" }} />
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
                            ))}
                        </Styles.ProgramColumn>
                    ))
                ))}
            </Styles.Programs>
        </>
    );
}
