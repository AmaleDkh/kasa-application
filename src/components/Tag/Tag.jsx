// Style
import "../Tag/Tag.scss";

function Tags({ tags }) {
  return (
    <div className="tags-container">
      {tags.map((tag, index) => (
        <span key={`${index}-${tag}`} className="tags-container__tag-word">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default Tags;
