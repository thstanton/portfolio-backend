// Interface automatically generated by schemas-to-ts

import { Media } from '../common/Media';
import { Post } from './post';
import { Technology } from './technology';
import { Media_Plain } from '../common/Media';
import { Post_Plain } from './post';
import { Technology_Plain } from './technology';
import { AdminPanelRelationPropertyModification } from '../common/AdminPanelRelationPropertyModification';

export interface Project {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    title?: string;
    description?: string;
    image?: { data: Media };
    posts: { data: Post[] };
    technologies: { data: Technology[] };
    deployedLink?: string;
    githubLink?: string;
  };
}
export interface Project_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  description?: string;
  image?: Media_Plain;
  posts: Post_Plain[];
  technologies: Technology_Plain[];
  deployedLink?: string;
  githubLink?: string;
}

export interface Project_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  description?: string;
  image?: number;
  posts: number[];
  technologies: number[];
  deployedLink?: string;
  githubLink?: string;
}

export interface Project_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  description?: string;
  image?: AdminPanelRelationPropertyModification<Media_Plain>;
  posts: AdminPanelRelationPropertyModification<Post_Plain>;
  technologies: AdminPanelRelationPropertyModification<Technology_Plain>;
  deployedLink?: string;
  githubLink?: string;
}
