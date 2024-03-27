import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, onThumbnailItem} = props
  const {thumbnailUrl} = thumbnailDetails

  const onClickThumbnail = () => {
    onThumbnailItem(thumbnailUrl)
  }

  return (
    <li className="thumbnail-item">
      <button
        type="button"
        className="thumbnail-button"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-img" />
      </button>
    </li>
  )
}

export default ThumbnailItem
