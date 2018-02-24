import { combineEpics } from 'redux-observable';
import * as BLOG from './queries/blog/blog.epic';

const rootEpic = combineEpics(
  BLOG.getBlogEpic,
);

export default rootEpic;
