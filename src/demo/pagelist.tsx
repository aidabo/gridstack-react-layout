import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { Divider, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Add this
import AddIcon from "@mui/icons-material/Add";
import TrashIcon from "@mui/icons-material/Delete";

import Stack from "@mui/material/Stack";
import { PageProps } from "../components/stackoptions";
import { useLayoutStore } from "./api";

export default function PageList() {
  const { getPageList, deletePage } = useLayoutStore();
  const [pages, setPages] = useState<PageProps[]>([]);
  const navigate = useNavigate(); 

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

  const handleDelete = async (pageid: string) => {
    if (window.confirm("Are you sure you want to delete this page?")) {
      try {
        await deletePage(pageid);
        setPages(pages.filter((page) => page.id !== pageid));
      } catch (error) {
        console.error("Failed to delete page:", error);
      }
    }
  };

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
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", marginBottom: 4 }}
      >
        <Typography variant="h6" sx={{ flexGrow: 1, margin: 2 }}>
          Page List ({pages.length} pages)
        </Typography>
        <IconButton
          onClick={() => handleCreatePage()}
          color="primary"
          sx={{ marginX: 3 }}
        >
          <AddIcon />
          <Typography>Create New Page</Typography>
        </IconButton>
      </Box>
      <Divider />
      <Stack
        spacing={2}
        sx={{ marginX: "10px", backgroundColor: "#f5f5f5", padding: 2 }}
      >
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
                <Typography>{page.id}</Typography>
              </Box>
              <Box>
                <Typography>{page.title}</Typography>
              </Box>
              <Box>
                <IconButton
                  onClick={() => handleEdit(page.id)}
                  sx={{ marginX: 2 }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  onClick={() => handleView(page.id)}
                  sx={{ marginX: 2 }}
                >
                  <VisibilityIcon />
                </IconButton>
                <IconButton
                  onClick={() => handleDelete(page.id)}
                  sx={{ marginX: 2 }}
                >
                  <TrashIcon />
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
