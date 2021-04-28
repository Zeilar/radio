import styled from 'styled-components';
import { Button } from '../styled-components';
import { mdiLoading } from '@mdi/js';
import Icon from '@mdi/react';

export default function LoadingButton({ loading = false, children, ...props }) {
    return (
        <Button disabled={loading} {...props}>
            {loading ? <Loading /> : children}
        </Button>
    );
}

const Loading = styled(Icon).attrs({ path: mdiLoading, spin: 1 })`
    width: 1.5rem;
    height: 1.5rem;
`;