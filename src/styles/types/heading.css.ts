import { injectGlobal } from 'emotion';
import { font } from '../utils/variables.css';

injectGlobal`
    .heading-01 {
        font-size: 1.8rem/1 ${font.ARIAL};
    }
`;
