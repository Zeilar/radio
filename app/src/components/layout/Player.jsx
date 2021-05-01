import { useContext } from 'react';
import styled, { css } from 'styled-components';
import { PlayerContext } from '../contexts/PlayerContext';
import { Col, Row, H5 } from '../styled-components';
import {
    mdiPlay,
    mdiPause,
    mdiVolumeHigh,
    mdiLoading,
    mdiVolumeOff,
    mdiVolumeMedium
} from '@mdi/js';
import Icon from '@mdi/react';

export default function Player() {
    const {
        play,
        pause,
        loading,
        playing,
        title,
        description,
        volume,
        toggleMute,
        setVolume,
        muted,
    } = useContext(PlayerContext);

    function renderPlayButton() {
        if (loading) {
            return <PlayerIcon style={{ cursor: "default" }} path={mdiLoading} spin={1} />
        }
        if (playing) {
            return <PlayerIcon path={mdiPause} onClick={pause} title="Pausa" />
        }
        return <PlayerIcon path={mdiPlay} onClick={play} title="Spela" />
    }

    function renderVolumeIcon() {
        if (muted || volume <= 0) {
            return mdiVolumeOff;
        }
        if (volume < 50) {
            return mdiVolumeMedium;
        }
        return mdiVolumeHigh;
    }
    
    return (
        <Wrapper>
            <VolumeWrapper>
                <VolumeIcon path={renderVolumeIcon()} onClick={toggleMute} />
                <VolumeSlider value={volume} onChange={e => setVolume(e.target.value)} />
            </VolumeWrapper>
            <Controls>
                {renderPlayButton()}
            </Controls>
            <Meta>
                <Title>{title}</Title>
                <Description title={description}>{description}</Description>
            </Meta>
        </Wrapper>
    );
}

const Wrapper = styled(Row).attrs({ justify: "center", align: "center" })`
    position: sticky;
    margin-top: auto;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 15px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.15);
    ${({ theme }) => css`
        background-color: rgb(${theme.color.bodyLight});
        border-top: 2px solid rgb(${theme.color.brand});
        @media (max-width: ${theme.breakpoints.phone}px) {
            justify-content: space-between;
        }
    `}
`;

const VolumeWrapper = styled(Row).attrs({ justify: "flex-end" })`
    width: 20rem;  
    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.phone}px) {
            width: unset;
            max-width: 10rem;
        }
    `}
`;

const VolumeSlider = styled.input.attrs({ type: "range", min: 0, max: 100 })`
    cursor: pointer;
    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.phone}px) {
            width: 100px;      
        }
    `}
`;

const VolumeIcon = styled(Icon)`
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 10px;
    cursor: pointer;
`;

const Controls = styled(Row).attrs({ justify: "center" })`
    margin: auto 30px;
    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.phone}px) {
            margin: 0;      
        }
    `}
`;

const Meta = styled(Col)`
    width: 20rem;
    white-space: nowrap;
    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.phone}px) {
            width: unset;
            max-width: 10rem;
        }
    `}
`;

const Title = styled(H5)`
    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.phone}px) {
            white-space: normal;
            text-align: right;      
        }
    `}
`;

const Description = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.phone}px) {
            display: none;
        }
    `}
`;

const PlayerIcon = styled(Icon)`
    cursor: pointer;
    border: 0;
    background: none;
    outline: 0;
    width: 2.5rem;
    user-select: none;
    ${({ theme }) => css`
        @media (max-width: ${theme.breakpoints.phone}px) {
            position: absolute;
            transform: translate(-50%, -50%);
            left: 50%;
            top: 50%;
        }
    `}
`;
