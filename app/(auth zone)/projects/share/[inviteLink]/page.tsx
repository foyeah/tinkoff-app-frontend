'use client'

import { enterFromInviteLink } from '@/api/Api'
import { ProjectResponse } from '@/api/dataСontracts'
import { useParams, redirect } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Page() {
    const params = useParams<{ inviteLink: string }>()
    const inviteLink = params.inviteLink

    const [project, setProject] = useState([] as ProjectResponse)

    useEffect(() => {
        enterFromInviteLink(inviteLink)
            .then(({ data: project }) => {
                setProject(project)
            })
    }, [inviteLink])

    redirect(`/projects/${project.id}`)
}