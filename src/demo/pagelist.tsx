import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { Divider, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Add this
import AddIcon from "@mui/icons-material/Add";

import Stack from "@mui/material/Stack";
import { PageProps } from "../components/stackoptions";
import { useLayoutStore } from "./api";

export default function PageList() {
  const { getPageList } = useLayoutStore();
  const [pages, setPages] = useState<PageProps[]>([]);
  const navigate = useNavigate(); // Add navigation hook

  useEffect(() => {
    const fetchPages = async () => {
      try {
        const pages = await getPageList();
        if (pages !== false) {
          setPages(pages as PageProps[]);
        }
      } catch (error) {
        console.error("Failed to fetch pages:", error);
        setPages([]);
      }
    };

    fetchPages();
  }, []);

  const handleEdit = (pageid: string) => {
    navigate(`/edit/${pageid}`); // Navigate to edit page
  };

  const handleView = (pageid: string) => {
    navigate(`/view/${pageid}`); // Navigate to view page
  };

  const handleCreatePage = () => {
    navigate("/edit/");
  };

  return (
    <Box>
      <Box sx={{display: 'flex', justifyContent: 'flex-end', marginBottom: 4}}>
        <IconButton onClick={() => handleCreatePage()}>
          <AddIcon />
          <Typography>Create New Page</Typography>
        </IconButton>
      </Box>
      <Divider />
      <Stack spacing={2} sx={{ marginX: "10px" }}>
        {pages.map((page: PageProps) => (
          <Box key={page.id} sx={{ flexGrow: 1 }}>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: "space-between",
                alignItems: "stretch",
              }}
              minHeight={40}
            >
              <Box>
                <Avatar src={page.image || "/assets/page.jpg"} />
              </Box>
              <Box>
                <Typography>{page.title || "untitled page"}</Typography>
              </Box>
              <Box>
                <Typography>{page.description}</Typography>
              </Box>
              <Box>
                <IconButton onClick={() => handleEdit(page.id)}>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleView(page.id)}>
                  <VisibilityIcon />
                </IconButton>
              </Box>
            </Stack>
            <Divider />
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
