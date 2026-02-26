import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
    return (
        <Grid container>
            <AppBar position="static" elevation={0}>
                <Toolbar>
                    <Grid
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                        size="auto"
                        mr={2}
                    >
                        <Typography
                            variant="h5"
                            component="a"
                            sx={{
                                color: "inherit",
                                fontWeight: 700,
                                textDecoration: "none"
                            }}
                            href="https://jhg.app"
                            target="_blank"
                            rel="noreferrer"
                        >
                            links.jhg.app
                        </Typography>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Grid>
    );
}
