import React, { FC, useState } from 'react'
import classNames from 'classnames'
// import Icon from '../Icon'
import Transition from '../Transition'
export type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
  /**标题 */
  title: string;
  /**描述 */
  description?: string;
  /**类型 四种可选 针对四种不同的场景 */
  type?: AlertType;
  /**关闭alert时触发的事件 */
  onClose?: () => void;
  /**是否显示关闭图标*/
  closable?: boolean;
}

export const Alert: FC<AlertProps> = (props) => {
  const [hide, setHide] = useState(false)
  const {
    title,
    description,
    type,
    onClose,
    closable
  } = props

  // 类型的类名
  const classes = classNames('viking-alert', {
    [`viking-alert-${type}`]: type,
  })

  // 描述
  const titleClass = classNames('viking-alert-title', {
    'bold-title': description
  })

  const handleClose = (e: React.MouseEvent) => {
    onClose && onClose()
    setHide(true)
  }
  return (
    <Transition
      in={!hide}
      timeout={300}
      animation="zoom-in-top"
    >
      <div className={classes}>
        <span className={titleClass}>{title}</span>
        {description && <p className="viking-alert-desc">{description}</p>}
        {closable && <span className="viking-alert-close" onClick={handleClose}></span>}
        {/* <Icon icon="times" /> */}
      </div>
    </Transition>
  )
}

Alert.defaultProps = {
  type: 'default',
  closable: true,
}
export default Alert;