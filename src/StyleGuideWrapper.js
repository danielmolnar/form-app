import { GlobalStyles } from '../src/GlobalStyles';

const StyleGuideWrapper = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default StyleGuideWrapper;
