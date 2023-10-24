import {
  Breadcrumbs as RACBreadcrumbs,
  Breadcrumb,
  Link,
} from 'react-aria-components';
import type { BreadcrumbsProps } from 'react-aria-components';

type Breadcrumb = {
  '@id': string;
  title: string;
};

export default function Breadcrumbs({ items }: BreadcrumbsProps<Breadcrumb>) {
  return (
    <nav aria-label="breadcrumbs" role="navigation">
      <RACBreadcrumbs className="q breadcrumbs" items={items}>
        {(item) => (
          <Breadcrumb key={item['@id']} className="q breadcrumb">
            <Link href={item['@id']}>{item.title}</Link>
          </Breadcrumb>
        )}
      </RACBreadcrumbs>
    </nav>
  );
}
