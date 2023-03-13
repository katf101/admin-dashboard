import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

const DashboardPage: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom>
          대시보드
        </Typography>
        {/* 여기에 각종 컴포넌트 추가 */}
      </Container>
    </Box>
  );
};

export default DashboardPage;
