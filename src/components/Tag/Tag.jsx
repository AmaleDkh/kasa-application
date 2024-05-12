// Style
import "../Tag/Tag.scss";

function Tag({ tags }) {
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

export default Tag;
