import { AriaLabelingProps } from '@react-types/shared';
import { Breadcrumb } from 'react-aria-components';
import type { BreadcrumbsProps as BreadcrumbsProps_2 } from 'react-aria-components';
import { DOMProps } from '@react-types/shared';
import { ForwardRefExoticComponent } from 'react';
import { IconColorValue } from '@react-types/shared';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import { LinkProps } from 'react-aria-components';
import { default as React_2 } from 'react';
import { ReactElement } from 'react';
import { ReactNode } from 'react';
import { RefAttributes } from 'react';
import { StyleProps } from '@react-types/shared';
import type { TextFieldProps } from 'react-aria-components';

/**
 * Breadcrumbs display a hierarchy of links to the current page or resource in an application.
 */
export declare function Breadcrumbs({ items, root, includeRoot, }: BreadcrumbsProps<Breadcrumb>): JSX_2.Element;

declare interface BreadcrumbsProps<T> extends BreadcrumbsProps_2<T> {
    /**
     * Current navigation root URL (flattened)
     */
    root?: string;
    /**
     * Whether include the root item in the breadcrubs (based on the root prop)
     */
    includeRoot?: boolean;
}

export declare const Container: (props: ContainerProps) => JSX_2.Element;

declare type ContainerProps = {
    /** Primary content. */
    children: ReactNode;
    /** An element type to render as (string or function). */
    as: ReactNode;
    /** Additional classes. */
    className: string;
    /** Layout size */
    layout: boolean;
    /** Narrow size. */
    narrow: boolean;
};

/**
 * Spectrum icons are clear, minimal, and consistent across platforms. They follow the focused and rational principles of the design system in both metaphor and style.
 */
export declare function Icon(props: IconProps): React_2.ReactElement<any, string | React_2.JSXElementConstructor<any>>;

declare interface IconProps extends DOMProps, AriaLabelingProps, StyleProps {
    /**
     * A screen reader only label for the Icon.
     */
    'aria-label'?: string;
    /**
     * The content to display. Should be an SVG.
     */
    children: ReactElement;
    /**
     * Size of Icon (changes based on scale).
     */
    size?: 'XXS' | 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
    /**
     * A slot to place the icon in.
     * @default 'icon'
     */
    slot?: string;
    /**
     * Indicates whether the element is exposed to an accessibility API.
     */
    'aria-hidden'?: boolean | 'false' | 'true';
    /**
     * Color of the Icon.
     */
    color?: IconColorValue;
}

export declare function Input({ title, description, error, ...props }: InputProps): JSX_2.Element;

declare interface InputProps extends TextFieldProps {
    title?: string;
    description?: string;
    error?: string[];
    placeholder: string;
}

export declare const Link: ForwardRefExoticComponent<LinkProps & RefAttributes<HTMLAnchorElement>>;

export { }
