import { ComentsProvider } from "../providers/ComentsContext";

const withComment = (Component) => (props) => {
  return (
    <ComentsProvider>
      <Component {...props} />
    </ComentsProvider>
  );
};

export default withComment;
