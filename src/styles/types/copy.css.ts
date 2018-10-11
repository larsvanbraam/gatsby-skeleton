import { injectGlobal } from 'emotion';
import { font } from '../utils/variables.css';

injectGlobal`
    .copy-01 {
        font-size: 1.8rem/1 ${font.ARIAL};
    }
`;
