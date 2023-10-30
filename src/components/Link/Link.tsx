import React, { forwardRef, ForwardedRef } from 'react';
import { Link as RACLink, LinkProps } from 'react-aria-components';
import { forwardRefType } from 'react-aria-components/src/utils';
import { flattenToAppURL } from '../../../../../app/utils';

const Link = (props: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
  const flattenedURL = flattenToAppURL(props.href);

  return (
    <RACLink ref={ref} {...props} href={flattenedURL}>
      {props.children}
    </RACLink>
  );
};

const _Link = /*#__PURE__*/ (forwardRef as forwardRefType)(Link);
export { _Link as Link };
