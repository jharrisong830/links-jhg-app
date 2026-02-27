import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function LinkCard({
    title,
    subtitle,
    link,
    icon
}: {
    title: string;
    subtitle: string;
    link: string;
    icon: React.ReactNode;
}) {
    return (
        <Card
            variant="outlined"
            sx={{
                color: "primary.contrastText",
                backgroundColor: "#212529",
                height: "100%",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <CardActionArea href={link} target="_blank" rel="noreferrer">
                <CardContent sx={{ flex: 1 }}>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid size="auto" pr={4}>{icon}</Grid>
                        <Grid size="grow">
                            <Typography variant="h5" component="div">
                                {title}
                            </Typography>
                            <Typography sx={{ color: "text.secondary" }}>
                                {subtitle}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
