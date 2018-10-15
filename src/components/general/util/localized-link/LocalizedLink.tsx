import React from 'react';
import { Link } from 'gatsby';
import { injectIntl, InjectedIntlProps } from 'react-intl';
import localeConfig from '../../../../../locale-config';

class LocalizedLink extends React.Component<{ to: string; className: string } & InjectedIntlProps> {
  render() {
    const {
      to,
      intl: { locale },
    } = this.props;
    const path = localeConfig[locale].default ? to : `/${locale}${to}`;
    const props = { ...this.props };
    delete props.intl;

    return <Link {...props} to={path} />;
  }
}

export default injectIntl(LocalizedLink);
