import { css } from 'react-emotion';
import { color } from '../../styles/utils/variables';

export default {
  header: css`
    height: 50px;
    background: ${color.PRIMARY};
    color: white;
  `,
  innerHeader: css`
    margin: 0 auto;
    max-width: 960px;
  `,
  link: css`
    color: white;
    textdecoration: none;
  `,
};
