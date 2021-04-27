import {  useContext } from 'react';
import styled, { css } from 'styled-components';
import { PlayerContext } from '../contexts/PlayerContext';
import { mdiPlay, mdiPause } from '@mdi/js';
import Icon from '@mdi/react';

export default function PlayerButton({ args = {}, ...props }) {
    const { isChannelPlaying, changeTrack, pause } = useContext(PlayerContext);

    if (isChannelPlaying(args.src)) {
        return <Toggler path={mdiPause} onClick={pause} title="Pausa" {...props} />;
    }

    return (
        <Toggler
            onClick={() => changeTrack(args.src, args.name, args.description)}
            path={mdiPlay}
            title="Spela"
            {...props}
        />
    );
}

const Toggler = styled(Icon)`
    width: 2.5rem;
    height: 2.5rem;
    margin-left: auto;
    cursor: pointer;
    ${({ color }) => css`
        fill: #${color};
    `}
`;
