import React, { useContext, useState } from "react";
import {
  Button,
  Card,
  Stack,
  Typography,
  ThemeProvider,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { Delete, Edit } from "@mui/icons-material";
import ScoreChanger from "./ScoreChanger";
import YouTag from "./YouTag";
import ConfirmDelete from "./ConfirmDelete";
import { useTheme } from "@mui/material/styles";
import { UserContext } from "../../contexts/UserContext";

const Comment = (props) => {
  const comment = props.comment;
  const userContext = useContext(UserContext);
  const theme = useTheme();
  const [editingComm, setEditingComm] = useState(false);
  const [commentText, setCommentText] = useState(comment.text);
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  

  return (
    <ThemeProvider theme={theme}>
      <ConfirmDelete onOpen={openModal} onClose={handleClose} id={comment.id} />
      <Card>
        <Box sx={{ p: "15px" }}>
          <Stack spacing={2} direction="row">
            <Box>
              <ScoreChanger onScore={comment.score} />
            </Box>
            <Box sx={{ width: "100%" }}>
              <Stack
                spacing={2}
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack spacing={2} direction="row" alignItems="center">
                  <Typography fontWeight="bold">{comment.userEmail}</Typography>
                  {comment.userEmail === userContext.user.mail && <YouTag />}
                  <Typography>
                    {comment.createdAt}
                  </Typography>
                </Stack>
                {comment.userEmail === userContext.user.mail && (
                  <Stack direction="row" spacing={1}>
                    <Button
                      startIcon={<Delete />}
                      sx={{
                        fontWeight: 500,
                        textTransform: "capitalize",
                      }}
                      color="primary"
                      onClick={() => {
                        handleOpen();
                      }}
                    >
                      Delete
                    </Button>
                    <Button
                      variant="text"
                      disabled={editingComm}
                      sx={{
                        fontWeight: 500,
                        textTransform: "capitalize",
                      }}
                      color="primary"
                      startIcon={<Edit />}
                      onClick={() => setEditingComm(!editingComm)}
                    >
                      Edit
                    </Button>
                  </Stack>
                )}
              </Stack>
              {editingComm ? (
                <>
                  <TextField
                    sx={{ p: "20px 0" }}
                    multiline
                    fullWidth
                    minRows={4}
                    id="outlined-multilined"
                    placeholder="Don't leave this blank!"
                    value={commentText}
                    onChange={(e) => {
                      setCommentText(e.target.value);
                    }}
                  />
                  <Button
                    sx={{
                      float: "right",
                      color: "neutral.white",
                      p: "8px 25px",
                    }}
                    onClick={() => {
                      !commentText.trim()
                        ? alert(
                            "If  you want to remove the comment text, just delete the comment."
                          )
                        : setEditingComm(!editingComm);
                    }}
                  >
                    Update
                  </Button>
                </>
              ) : (
                <Typography sx={{ p: "20px 0" }}>{commentText}</Typography>
              )}
            </Box>
          </Stack>
        </Box>
      </Card>
    </ThemeProvider>
  );
};
export default Comment;
