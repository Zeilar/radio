import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';

export default function Programs() {
    const {
        data: categories,
        loading: loadingCategories,
        success: categoriesSuccess
    } = useFetch("http://api.sr.se/api/v2/programcategories?format=json&pagination=false");

    return (
        <div>
            
        </div>
    );
}
