/**
 * 全局样式组件
 */
import styled from 'vue-styled-components';

export const ThemeColor = styled('div', ['color'])`
  font-size:16px;
  color: ${props => {
    console.log(props)
    return props.color ? props.color: props.theme.primary
  }}
`