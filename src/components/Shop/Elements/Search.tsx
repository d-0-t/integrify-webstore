import { memo } from 'react';
import { useSelector } from 'react-redux';
import { SearchPropType } from '../../../types/typesOfSearch';
import { RootState } from '../../../types/typesOfState';

function Search({ keyword, handleChange }: SearchPropType) {
  const { theme } = useSelector((state: RootState) => state.themeReducer);

  let appTheme = "";
  if (theme === "other") {
    appTheme = "darktheme__input"
  }
  return (
    <input
      type="text"
      className={`search-input ${appTheme}`}
      placeholder="Search for a product..."
      value={keyword}
      onChange={handleChange}
    />
  );
}

export default memo(Search);
