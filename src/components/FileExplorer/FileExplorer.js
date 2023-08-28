import { useState } from "react";
import fileData from "../../utils/data.json";
import styles from "./FileExplorer.module.scss";

const FileExplorer = ({ data, level = 1 }) => {
  const [isVisible, setIsVisible] = useState(true);

  //** this method is to get the sub folders of a particular folder */
  const getSubFolderData = (item) => {
    return fileData.filter((subItem) => subItem.parent === item.id);
  };

  //** this method is for toggeling the flag state */
  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <ul className={styles.directory}>
      <li className={styles.directory_item}>
        {data.isDir ? (
          <>
            <span onClick={handleClick}>
              📁
              {data.name}
            </span>
            {getSubFolderData(data).map((item) => (
              <div
                className={`${isVisible ? styles.show : styles.hide}`}
                style={{ paddingLeft: `${10 * level}px` }}
              >
                <FileExplorer data={item} level={level + 1} key={item.parent} />
              </div>
            ))}
          </>
        ) : (
          <span>🗎{data.name}</span>
        )}
      </li>
    </ul>
  );
};

export default FileExplorer;
