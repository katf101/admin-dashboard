import { CircularProgress, CircularProgressProps } from "@mui/material";

interface LoadingProps extends CircularProgressProps {}

const Loading: React.FC<LoadingProps> = (props) => {
  return (
    <div className="loading">
      <CircularProgress {...props} />
    </div>
  );
};

export default Loading;
