'use client';

import React from 'react';
import { TbPlaylist } from 'react-icons/tb';
import { AiOutlinePlus } from 'react-icons/ai';

import { Song } from '@/types';
import useUploadModal from '@/hooks/useUploadModal';
import { useUser } from '@/hooks/useUser';
import useAuthModal from '@/hooks/useAuthModal';
import useOnPlay from '@/hooks/useOnPlay';

import MediaItem from './MediaItem';

interface LibraryProps {
    songs: Song[];
}

export const Library: React.FC<LibraryProps> = ({ songs }) => {
    const authModal = useAuthModal();
    const uploadModal = useUploadModal();
    const { user } = useUser();

    const onPlay = useOnPlay(songs);
    const onClick = () => {
        // Handle upload
        if (!user) {
            return authModal.onOpen();
        }
        // TODO: Check for subscription

        return uploadModal.onOpen();
    };

    return (
        <div
            className="flex flex-col">
            <div
                className="flex items-center justify-between px-5 pt-4">
                <div
                    className="inline-flex items-center gap-x-2">
                    <TbPlaylist
                        size={26}
                        className="text-neutral-400" />
                    <p className="text-neutral-40 font-medium text-md">
                        Your Library
                    </p>
                </div>
                <AiOutlinePlus
                    onClick={onClick}
                    size={20}
                    className="text-neutral-400 cursor-pointer hover:text-white transition"
                />
            </div>
            <div
                className="flex flex-col gap-y-2 mt-4 px-3">
                {songs.map((item) => (
                    <MediaItem
                        onClick={(id: string) => onPlay(id)}
                        key={item.id}
                        data={item}
                    />
                ))}
            </div>
        </div>
    );
};
