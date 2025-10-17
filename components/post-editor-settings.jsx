"use client"
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'


const CATEGORIES = [
  "Technology",
  "Design",
  "Marketing",
  "Business",
  "Lifestyle",
  "Education",
  "Health",
  "Travel",
  "Food",
  "Entertainment"
]

const PostEditorSettings = ({isOpen,onClose,form,mode}) => {

  const [tagInput,setTagInput]=useState("")

  const {watch,setValue} = form

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-white">Post Settings</DialogTitle>
            <DialogDescription>Configure your details</DialogDescription>
          </DialogHeader>

          <div className='space-y-6'>
            <div className='space-y-2'>
              <Select>
                <SelectTrigger>
                  <SelectValue/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem></SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
    </div>
  )
}

export default PostEditorSettings
