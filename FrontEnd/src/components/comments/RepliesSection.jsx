import { Box, Card, Stack, Typography, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import ScoreChanger from "./ScoreChanger";
import AddReply from "./AddReply";
import OwnReply from "./OwnReply";
import { Reply } from "@mui/icons-material";
import { UserContext } from "../../contexts/UserContext";

const RepliesSection = ({ onReplies, onClicked, onTar }) => {
  const userContext = useContext(UserContext);
  const [repliess, setReplies] = useState(onReplies);

  const addReply = (data) => {
    setReplies([
      ...repliess,
      {
        id: Math.floor(Math.random() * 10000),
        content: data,
        createdAt: "Just now",
        score: 0,
        replyingTo: `${onTar}`,
        replies: [],
        user: { username: userContext.user.mail },
      },
    ]);
  };
  const deleteReply = (id) => {
    setReplies(repliess.filter((reply) => reply.id !== id));
  };
  return (
    <Stack spacing={2} width="800px" alignSelf="flex-end">
      
      {repliess.map((rep) => {
        const { content, createdAt, score, user, replyingTo } = rep;
        const userName = user.username;
        return userName === userContext.user.mail ? (
          <OwnReply
            key={rep.id}
            comId={rep.id}
            onContent={content}
            onTime={createdAt}
            onCount={score}
            onTar={replyingTo}
            onDel={deleteReply}
          />
        ) : (
          <Card key={rep.id}>
            <Box sx={{ p: "15px" }}>
              <Stack spacing={2} direction="row">
                <Box>
                  <ScoreChanger onScore={score} />
                </Box>
                <Box sx={{ width: "100%" }}>
                  <Stack
                    spacing={2}
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Stack spacing={2} direction="row" alignItems="center">
                      <Typography
                        fontWeight="bold"
                      >
                        {userName}
                      </Typography>
                      <Typography>
                        {createdAt}
                      </Typography>
                    </Stack>
                    <Button
                      variant="text"
                      startIcon={<Reply/>}
                    >
                      Reply
                    </Button>
                  </Stack>
                  <Typography
                    component="div"
                    sx={{ color: "neutral.grayishBlue", p: "20px 0" }}
                  >
                    <Typography
                      sx={{
                        color: "custom.moderateBlue",
                        width: "fit-content",
                        display: "inline-block",
                        fontWeight: 500,
                      }}
                    >
                      {`@${replyingTo}`}
                    </Typography>{" "}
                    {content}
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Card>
        );
      })}
      {onClicked && <AddReply onAdd={addReply} />}
    </Stack>
  );
};

export default RepliesSection;
