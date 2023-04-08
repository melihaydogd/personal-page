import styled from '@emotion/styled';

export const StyledAnchor = styled("a")(({theme}) => ({
  color: "inherit",
  textDecoration: "none",
  "&:hover": {
    color: theme.palette.grey.A700,
  },
}));
