import { ComponentChildren } from 'preact';
import { HTMLAttributesSignalExcluded } from '@oracle/oraclejet-preact/utils/UNSAFE_attributeUtils';
import { InlineUserAssistance } from '@oracle/oraclejet-preact/UNSAFE_UserAssistance';
import { Size } from '@oracle/oraclejet-preact/utils/UNSAFE_size';
import { DisplayOptions, Help, HelpHints } from '../../editable-value/UNSAFE_useAssistiveText/useAssistiveText';
type InlineUserAssistanceProps = Parameters<typeof InlineUserAssistance>[0];
type Props = Pick<HTMLAttributesSignalExcluded, 'aria-describedby' | 'id' | 'onBlur' | 'onFocus'> & {
    children: ComponentChildren;
    containerReadonly?: boolean;
    disabled?: boolean;
    userAssistanceId: string;
    labelHint: string;
    labelEdge?: 'start' | 'top' | 'inside' | 'none';
    labelStartWidth?: Size;
    labelWrapping?: 'truncate' | 'wrap';
    messagesCustom?: InlineUserAssistanceProps['messages'];
    readonly?: boolean;
    isRequiredShown?: boolean;
    displayOptions?: DisplayOptions;
    help?: Help;
    helpHints?: HelpHints;
    userAssistanceDensity?: 'reflow' | 'efficient';
};
declare function InputGroup({ id, children, labelHint, displayOptions, help, helpHints, readonly, containerReadonly, labelWrapping, labelStartWidth, onBlur, onFocus, isRequiredShown, userAssistanceId, messagesCustom, disabled, labelEdge: labelEdgeProp, userAssistanceDensity: userAssistanceDensityProp, ...otherProps }: Props): import("preact").JSX.Element;
export { InputGroup };
