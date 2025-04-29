import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilterChange }) => {
  return (
    <div className={styles.box}>
      <label className={styles.label}>
        Find contacts by name:
              <input
                  className={styles.input}
          type="text"
          value={filter}
                  onChange={(e) => onFilterChange(e.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
