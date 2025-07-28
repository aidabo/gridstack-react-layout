import { Container, Avatar } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useCallback } from 'react';

export default function DeleteDropZone({ onDropDelete }: { onDropDelete: () => void }) {
  const handleDrop = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    onDropDelete();
  }, [onDropDelete]);

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  return (
    <Container
      id="trash"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      disableGutters
      sx={{
        bgcolor: 'rgba(255, 205, 210, 0.5)', // light red background
        minHeight: '3.5rem',
        height: '4.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 0,
      }}
    >
      <Avatar
        sx={{
          bgcolor: '#ffcdd2', // light red background
          width: '100%',
          height: '100%',
          m: 3,
        }}
        variant='rounded'
      >
        <DeleteOutlineIcon
          sx={{
            fontSize: '3.5rem',
            width: '3.5rem',
            color: 'rgba(100, 100, 100, 0.4)', // red icon
          }}
        />
      </Avatar>
    </Container>
  );
}
