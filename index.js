"use strict"

const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const PORT = 3000

app.use(bodyParser.json())

app.post("/hook", (req, res) => {
    console.log(req.body)
    res.status(200).end()
})

// {"kind":"story","change_type":"create","id":182043035,"new_values":{"id":182043035,"project_id":2566441,"name":"Random story to investigate webhooks","story_type":"feature","current_state":"unstarted","requested_by_id":3386628,"owner_ids":[],"label_ids":[],"follower_ids":[],"created_at":1651343938000,"updated_at":1651343938000,"blocked_story_ids":[],"story_priority":"p3","labels":[]},"name":"Random story to investigate webhooks","story_type":"feature","story_priority":"p3"}

var handleNotifications = function incomingNotificationEvents(req) {
    let message = ""

    if (
        req != undefined &&
        req != null &&
        typeof req === json
    ){
        const highlight = req.body.highlight
        const kind = req.body.kind
        const type = req.body.change_type
        const message = req.body.message
        const occurred_at = new Date(req.body.occurred_at).toLocaleString("en-US")
        const performed_by = req.body.performed_by.name
        const resourse_name = req.body.primary_resources[0].name
        const resourse_kind = req.body.primary_resources[0].kind
        const resourse_priority = req.body.primary_resources[0].story_priority
        const resourse_type = req.body.primary_resources[0].story_type
        const resourse_url = req.body.primary_resources[0].url
        const project_name = req.body.project.name
        const changes = req.body.changes

        changes.forEach(item => {

        })
    }
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})