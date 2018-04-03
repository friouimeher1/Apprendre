import React from 'react'
import cx from 'classnames'
export default class Steps extends React.Component {
  render () {
    const { data } = this.props
    return <Stepper data={data} />
  }
}

const Stepper = props => {
  const { data } = props
  return (
    <div>
      <ul className="timeline">
        {data.map((item, i) => {
          return (
            <li
              className={cx('timelineItem', {
                timelineItem__current: item.current
              })}
              key={i}
            >
              <div className="timelineItem__Label">{item.dataLabel}</div>
              <div className="timelineItem__Date">{item.dataDate}</div>
              <div className="timelineItem__Icon">
                <i className="material-icons">stars</i>
              </div>
              <div className="timelineItem__View">{item.dataView}</div>
              <div className="timelineItem__User">By: {item.dataUser}</div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
