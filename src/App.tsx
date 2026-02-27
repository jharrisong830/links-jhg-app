import Navbar from "./components/Navbar";
import CustomThemeProvider from "./components/CustomThemeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import MergeIcon from "@mui/icons-material/Merge";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";
import PublicIcon from "@mui/icons-material/Public";

import LinkCard from "./components/LinkCard";
import PageHeader from "./components/PageHeader";

export default function App() {
    const links = [
        {
            title: "GitHub",
            subtitle: "@jharrisong830",
            link: "https://github.com/jharrisong830",
            icon: <MergeIcon />
        },
        {
            title: "LinkedIn",
            subtitle: "in/johngraham830",
            link: "https://www.linkedin.com/in/johngraham830",
            icon: <WorkIcon />
        },
        {
            title: "Email",
            subtitle: "john@jhg.app",
            link: "mailto:john@jhg.app",
            icon: <EmailIcon />
        },
        {
            title: "Personal Website",
            subtitle: "jhg.app",
            link: "https://jhg.app",
            icon: <PublicIcon />
        }
    ];
    return (
        <CustomThemeProvider>
            <CssBaseline />
            <Container
                disableGutters
                maxWidth={false}
                sx={{
                    color: "primary.contrastText",
                    backgroundColor: "primary.main",
                    minHeight: "100vh"
                }}
            >
                <Navbar />
                
                <PageHeader 
                    title="John Graham"
                    subtitles={["Stevens Institute of Technology - 2025", "B.S. Computer Science", "he/him/his"]}
                    shouldEmphasizeTitle
                />

                <Stack spacing={2} p={4}>
                    {links.map((link, index) => (
                        <LinkCard key={index} {...link} />
                    ))}
                </Stack>
            </Container>
        </CustomThemeProvider>
    );
}
