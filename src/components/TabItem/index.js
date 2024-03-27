import './index.css'

const TabItem = props => {
  const {tabDetails, onTabItem, isActive} = props
  const {tabId, displayText} = tabDetails
  const activeTabBtnClassName = isActive ? 'active-tab-btn' : ''
  const onClickTabItem = () => {
    onTabItem(tabId)
  }

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
