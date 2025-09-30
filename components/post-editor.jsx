"use client"

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import z from 'zod';
import {zodResolver} from "@hookform/resolvers/zod"
import { useConvexMutation } from '@/hooks/use-convex-query';

const postSchema = z.object({
  title: z.string().min(1, "Title is required").max(200, "Title too long"),
  content: z.string().min(1, "Content is required"),
  category: z.string().optional(),
  tags: z.array(z.string()).max(10, "Maximum 10 tags allowed"),
  featuredImage: z.string().optional(),
  scheduledFor: z.string().optional(),
});

const PostEditor = ({initialData=null,mod='create'}) => {

  const [isSettingOpen,setSettingsOpen]=useState(false);

  const {mutate:createPost, isLoading:isCreateLoading}=useConvexMutation(api.posts.create);

    const {mutate:updatePost, isLoading:isUpdating}=useConvexMutation(api.posts.create);


  useForm(
    {
      resolver:zodResolver(postSchema)
    }
  )
  return (
    <div>
      Hello
    </div>
  )
}

export default PostEditor
