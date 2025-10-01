"use client"

import React, { useState } from 'react'
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

const PostEditorHeader = ({
  mode,
  initialData,
  isPublishing,
  onSave,
  onPublish,
  onSchedule,
  onSettingsOpen,
  onBack
}) => {

  const [isPublishMenuOpen,setIsPublishMenuOpen]=useState(false);

  const isDraft = initialData?.status === 'draft';
  const isEdit = mode === "edit"
  return (
    <header className='sticky top-0 bg-slate-900/80 backdrop-blur-md border-b border-slate-800'>
      <div className='max-w-5xl mx-auto px-6 py-4 flex  items-center justify-between'>
        <div className='flex items-center space-x-4'>
          <Button>
            <ArrowLeft className='h-4 w-4 mr-2'/>
              Back
            </Button>        
        </div>
      </div>
    </header>
  )
}

export default PostEditorHeader
