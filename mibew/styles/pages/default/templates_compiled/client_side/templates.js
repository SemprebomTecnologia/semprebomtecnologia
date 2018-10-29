/*!
 * This file is a part of Mibew Messenger.
 *
 * Copyright 2005-2017 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates.default_control=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,n,e,s){var t;return"<strong>"+this.escapeExpression((t=null!=(t=n.title||(null!=a?a.title:a))?t:n.helperMissing,"function"==typeof t?t.call(a,{name:"title",hash:{},data:s}):t))+"</strong>"},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates.message=Handlebars.template({1:function(a,n,e,s){var t,l=n.helperMissing,i="function",r=this.escapeExpression;return"<span class='name-"+r((t=null!=(t=n.kindName||(null!=a?a.kindName:a))?t:l,typeof t===i?t.call(a,{name:"kindName",hash:{},data:s}):t))+"'>"+r((t=null!=(t=n.name||(null!=a?a.name:a))?t:l,typeof t===i?t.call(a,{name:"name",hash:{},data:s}):t))+"</span>: "},3:function(a,n,e,s){return this.escapeExpression((n.urlReplace||a&&a.urlReplace||n.helperMissing).call(a,null!=a?a.message:a,{name:"urlReplace",hash:{},data:s}))},compiler:[6,">= 2.0.0-beta.1"],main:function(a,n,e,s){var t,l,i=n.helperMissing,r=this.escapeExpression;return"<span>"+r((n.formatTime||a&&a.formatTime||i).call(a,null!=a?a.created:a,{name:"formatTime",hash:{},data:s}))+"</span>\n"+(null!=(t=n["if"].call(a,null!=a?a.name:a,{name:"if",hash:{},fn:this.program(1,s,0),inverse:this.noop,data:s}))?t:"")+"\n<span class='message-"+r((l=null!=(l=n.kindName||(null!=a?a.kindName:a))?l:i,"function"==typeof l?l.call(a,{name:"kindName",hash:{},data:s}):l))+"'>"+(null!=(t=(n.replace||a&&a.replace||i).call(a,"\\n","<br/>",{name:"replace",hash:{},fn:this.program(3,s,0),inverse:this.noop,data:s}))?t:"")+"</span><br/>"},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["users/agent"]=Handlebars.template({1:function(a,n,e,s){return"away"},3:function(a,n,e,s){return"online"},5:function(a,n,e,s){return this.escapeExpression((n.l10n||a&&a.l10n||n.helperMissing).call(a,"Away",{name:"l10n",hash:{},data:s}))},7:function(a,n,e,s){return this.escapeExpression((n.l10n||a&&a.l10n||n.helperMissing).call(a,"Up to date",{name:"l10n",hash:{},data:s}))},9:function(a,n,e,s){return","},compiler:[6,">= 2.0.0-beta.1"],main:function(a,n,e,s){var t,l;return'<span class="agent-status-'+(null!=(t=n["if"].call(a,null!=a?a.away:a,{name:"if",hash:{},fn:this.program(1,s,0),inverse:this.program(3,s,0),data:s}))?t:"")+' inline-block" title="'+(null!=(t=n["if"].call(a,null!=a?a.away:a,{name:"if",hash:{},fn:this.program(5,s,0),inverse:this.program(7,s,0),data:s}))?t:"")+'"></span>'+this.escapeExpression((l=null!=(l=n.name||(null!=a?a.name:a))?l:n.helperMissing,"function"==typeof l?l.call(a,{name:"name",hash:{},data:s}):l))+(null!=(t=n.unless.call(a,null!=a?a.isLast:a,{name:"unless",hash:{},fn:this.program(9,s,0),inverse:this.noop,data:s}))?t:"")},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["users/no_threads"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,n,e,s){return'<td class="no-threads" colspan="8">'+this.escapeExpression((n.l10n||a&&a.l10n||n.helperMissing).call(a,"The list of visitors waiting is empty",{name:"l10n",hash:{},data:s}))+"</td>"},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["users/no_visitors"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,n,e,s){return'<td class="no-visitors" colspan="9">'+this.escapeExpression((n.l10n||a&&a.l10n||n.helperMissing).call(a,"There are no visitors ready to chat on your site at present time",{name:"l10n",hash:{},data:s}))+"</td>"},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["users/queued_thread"]=Handlebars.template({1:function(a,n,e,s){return this.escapeExpression((n.l10n||a&&a.l10n||n.helperMissing).call(a,"Click to chat with the visitor",{name:"l10n",hash:{},data:s}))},3:function(a,n,e,s){return this.escapeExpression((n.l10n||a&&a.l10n||n.helperMissing).call(a,"Watch the chat",{name:"l10n",hash:{},data:s}))},5:function(a,n,e,s){return this.escapeExpression((n.l10n||a&&a.l10n||n.helperMissing).call(a,"[spam]",{name:"l10n",hash:{},data:s}))+"&nbsp;"},7:function(a,n,e,s){var t,l=n.helperMissing,i="function",r=this.escapeExpression;return'<div class="first-message"><a href="javascript:void(0);" title="'+r((t=null!=(t=n.firstMessage||(null!=a?a.firstMessage:a))?t:l,typeof t===i?t.call(a,{name:"firstMessage",hash:{},data:s}):t))+'">'+r((t=null!=(t=n.firstMessagePreview||(null!=a?a.firstMessagePreview:a))?t:l,typeof t===i?t.call(a,{name:"firstMessagePreview",hash:{},data:s}):t))+"</a></div>"},9:function(a,n,e,s){return'            <div class="control open-dialog open-control inline-block" title="'+this.escapeExpression((n.l10n||a&&a.l10n||n.helperMissing).call(a,"Click to chat with the visitor",{name:"l10n",hash:{},data:s}))+'"></div>\n'},11:function(a,n,e,s){return'            <div class="control view-control inline-block" title="'+this.escapeExpression((n.l10n||a&&a.l10n||n.helperMissing).call(a,"Watch the chat",{name:"l10n",hash:{},data:s}))+'"></div>\n'},13:function(a,n,e,s){return'            <div class="control track-control inline-block" title="'+this.escapeExpression((n.l10n||a&&a.l10n||n.helperMissing).call(a,"Tracked visitor's path",{name:"l10n",hash:{},data:s}))+'"></div>\n'},15:function(a,n,e,s){return'            <div class="control ban-control inline-block" title="'+this.escapeExpression((n.l10n||a&&a.l10n||n.helperMissing).call(a,"Ban this visitor",{name:"l10n",hash:{},data:s}))+'"></div>\n'},17:function(a,n,e,s){var t;return'<a href="javascript:void(0);" class="geo-link" title="GeoLocation">'+this.escapeExpression((t=null!=(t=n.remote||(null!=a?a.remote:a))?t:n.helperMissing,"function"==typeof t?t.call(a,{name:"remote",hash:{},data:s}):t))+"</a>"},19:function(a,n,e,s){var t;return this.escapeExpression((t=null!=(t=n.remote||(null!=a?a.remote:a))?t:n.helperMissing,"function"==typeof t?t.call(a,{name:"remote",hash:{},data:s}):t))},21:function(a,n,e,s){var t;return'<span class="timesince" data-timestamp="'+this.escapeExpression((t=null!=(t=n.waitingTime||(null!=a?a.waitingTime:a))?t:n.helperMissing,"function"==typeof t?t.call(a,{name:"waitingTime",hash:{},data:s}):t))+'"></span>'},23:function(a,n,e,s){return"-"},25:function(a,n,e,s){var t;return this.escapeExpression(this.lambda(null!=(t=null!=a?a.ban:a)?t.reason:t,a))},27:function(a,n,e,s){var t;return this.escapeExpression((t=null!=(t=n.userAgent||(null!=a?a.userAgent:a))?t:n.helperMissing,"function"==typeof t?t.call(a,{name:"userAgent",hash:{},data:s}):t))},compiler:[6,">= 2.0.0-beta.1"],main:function(a,n,e,s){var t,l,i=n.helperMissing,r="function",o=this.escapeExpression;return'<td class="visitor">\n    <div><a href="javascript:void(0);" class="user-name open-dialog" title="'+(null!=(t=n["if"].call(a,null!=a?a.canOpen:a,{name:"if",hash:{},fn:this.program(1,s,0),inverse:this.program(3,s,0),data:s}))?t:"")+'">'+(null!=(t=n["if"].call(a,null!=a?a.ban:a,{name:"if",hash:{},fn:this.program(5,s,0),inverse:this.noop,data:s}))?t:"")+o((l=null!=(l=n.userName||(null!=a?a.userName:a))?l:i,typeof l===r?l.call(a,{name:"userName",hash:{},data:s}):l))+"</a></div>\n    "+(null!=(t=n["if"].call(a,null!=a?a.firstMessage:a,{name:"if",hash:{},fn:this.program(7,s,0),inverse:this.noop,data:s}))?t:"")+'\n</td>\n<td class="visitor">\n    <div class="default-thread-controls inline-block">\n'+(null!=(t=n["if"].call(a,null!=a?a.canOpen:a,{name:"if",hash:{},fn:this.program(9,s,0),inverse:this.noop,data:s}))?t:"")+(null!=(t=n["if"].call(a,null!=a?a.canView:a,{name:"if",hash:{},fn:this.program(11,s,0),inverse:this.noop,data:s}))?t:"")+(null!=(t=n["if"].call(a,null!=a?a.tracked:a,{name:"if",hash:{},fn:this.program(13,s,0),inverse:this.noop,data:s}))?t:"")+(null!=(t=n["if"].call(a,null!=a?a.canBan:a,{name:"if",hash:{},fn:this.program(15,s,0),inverse:this.noop,data:s}))?t:"")+'    </div>\n    <div class="thread-controls inline-block"></div>\n</td>\n<td class="visitor">'+(null!=(t=n["if"].call(a,null!=a?a.userIp:a,{name:"if",hash:{},fn:this.program(17,s,0),inverse:this.program(19,s,0),data:s}))?t:"")+'</td>\n<td class="visitor">'+o((l=null!=(l=n.stateDesc||(null!=a?a.stateDesc:a))?l:i,typeof l===r?l.call(a,{name:"stateDesc",hash:{},data:s}):l))+'</td>\n<td class="visitor">'+o((l=null!=(l=n.agentName||(null!=a?a.agentName:a))?l:i,typeof l===r?l.call(a,{name:"agentName",hash:{},data:s}):l))+'</td>\n<td class="visitor"><span class="timesince" data-timestamp="'+o((l=null!=(l=n.totalTime||(null!=a?a.totalTime:a))?l:i,typeof l===r?l.call(a,{name:"totalTime",hash:{},data:s}):l))+'"></span></td>\n<td class="visitor">'+(null!=(t=n.unless.call(a,null!=a?a.chatting:a,{name:"unless",hash:{},fn:this.program(21,s,0),inverse:this.program(23,s,0),data:s}))?t:"")+'</td>\n<td class="visitor">'+(null!=(t=n["if"].call(a,null!=a?a.ban:a,{name:"if",hash:{},fn:this.program(25,s,0),inverse:this.program(27,s,0),data:s}))?t:"")+"</td>"},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["users/status_panel"]=Handlebars.template({1:function(a,n,e,s){return this.escapeExpression((n.l10n||a&&a.l10n||n.helperMissing).call(a,"Away",{name:"l10n",hash:{},data:s}))},3:function(a,n,e,s){return this.escapeExpression((n.l10n||a&&a.l10n||n.helperMissing).call(a,"Up to date",{name:"l10n",hash:{},data:s}))},5:function(a,n,e,s){return this.escapeExpression((n.l10n||a&&a.l10n||n.helperMissing).call(a,'Set status as "Available"',{name:"l10n",hash:{},data:s}))},7:function(a,n,e,s){return this.escapeExpression((n.l10n||a&&a.l10n||n.helperMissing).call(a,'Set status as "Away"',{name:"l10n",hash:{},data:s}))},compiler:[6,">= 2.0.0-beta.1"],main:function(a,n,e,s){var t,l;return'<div id="connection-status">'+this.escapeExpression((l=null!=(l=n.message||(null!=a?a.message:a))?l:n.helperMissing,"function"==typeof l?l.call(a,{name:"message",hash:{},data:s}):l))+(null!=(t=n["if"].call(a,null!=(t=null!=a?a.agent:a)?t.away:t,{name:"if",hash:{},fn:this.program(1,s,0),inverse:this.program(3,s,0),data:s}))?t:"")+'</div><div id="connection-controls"><a href="javascript:void(0);" id="change-status">'+(null!=(t=n["if"].call(a,null!=(t=null!=a?a.agent:a)?t.away:t,{name:"if",hash:{},fn:this.program(5,s,0),inverse:this.program(7,s,0),data:s}))?t:"")+"</a></div>"},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["users/threads_collection"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,n,e,s){var t=n.helperMissing,l=this.escapeExpression;return'<table class="awaiting" border="0">\n<thead>\n<tr>\n    <th class="first">'+l((n.l10n||a&&a.l10n||t).call(a,"Name",{name:"l10n",hash:{},data:s}))+"</th>\n    <th>"+l((n.l10n||a&&a.l10n||t).call(a,"Actions",{name:"l10n",hash:{},data:s}))+"</th>\n    <th>"+l((n.l10n||a&&a.l10n||t).call(a,"Visitor's address",{name:"l10n",hash:{},data:s}))+"</th>\n    <th>"+l((n.l10n||a&&a.l10n||t).call(a,"State",{name:"l10n",hash:{},data:s}))+"</th>\n    <th>"+l((n.l10n||a&&a.l10n||t).call(a,"Operator",{name:"l10n",hash:{},data:s}))+"</th>\n    <th>"+l((n.l10n||a&&a.l10n||t).call(a,"Total time",{name:"l10n",hash:{},data:s}))+"</th>\n    <th>"+l((n.l10n||a&&a.l10n||t).call(a,"Waiting time",{name:"l10n",hash:{},data:s}))+"</th>\n    <th>"+l((n.l10n||a&&a.l10n||t).call(a,"Misc",{name:"l10n",hash:{},data:s}))+'</th>\n</tr>\n</thead>\n<tbody id="threads-container">\n\n</tbody>\n</table>'},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["users/visitor"]=Handlebars.template({1:function(a,n,e,s){var t,l=n.helperMissing,i=this.escapeExpression;return'<a href="javascript:void(0);" class="invite-link" title="'+i((n.l10n||a&&a.l10n||l).call(a,"Invite to chat",{name:"l10n",hash:{},data:s}))+'">'+i((t=null!=(t=n.userName||(null!=a?a.userName:a))?t:l,"function"==typeof t?t.call(a,{name:"userName",hash:{},data:s}):t))+"</a>"},3:function(a,n,e,s){var t;return this.escapeExpression((t=null!=(t=n.userName||(null!=a?a.userName:a))?t:n.helperMissing,"function"==typeof t?t.call(a,{name:"userName",hash:{},data:s}):t))},5:function(a,n,e,s){var t;return'<a href="javascript:void(0);" class="geo-link" title="GeoLocation">'+this.escapeExpression((t=null!=(t=n.remote||(null!=a?a.remote:a))?t:n.helperMissing,"function"==typeof t?t.call(a,{name:"remote",hash:{},data:s}):t))+"</a>"},7:function(a,n,e,s){var t;return this.escapeExpression((t=null!=(t=n.remote||(null!=a?a.remote:a))?t:n.helperMissing,"function"==typeof t?t.call(a,{name:"remote",hash:{},data:s}):t))},9:function(a,n,e,s){var t;return this.escapeExpression(this.lambda(null!=(t=null!=a?a.invitationInfo:a)?t.agentName:t,a))},11:function(a,n,e,s){return"-"},13:function(a,n,e,s){var t;return'<span class="timesince" data-timestamp="'+this.escapeExpression(this.lambda(null!=(t=null!=a?a.invitationInfo:a)?t.time:t,a))+'"></span>'},compiler:[6,">= 2.0.0-beta.1"],main:function(a,n,e,s){var t,l,i=n.helperMissing,r=this.escapeExpression,o="function";return'<td class="visitor">\n    '+(null!=(t=n.unless.call(a,null!=a?a.invitationInfo:a,{name:"unless",hash:{},fn:this.program(1,s,0),inverse:this.program(3,s,0),data:s}))?t:"")+'\n</td>\n<td class="visitor">\n    <div class="default-visitor-controls inline-block">\n        <div class="control track-control inline-block" title="'+r((n.l10n||a&&a.l10n||i).call(a,"Tracked visitor's path",{name:"l10n",hash:{},data:s}))+'"></div>\n    </div>\n    <div class="visitor-controls inline-block"></div>\n</td>\n<td class="visitor">'+(null!=(t=n["if"].call(a,null!=a?a.userIp:a,{name:"if",hash:{},fn:this.program(5,s,0),inverse:this.program(7,s,0),data:s}))?t:"")+'</td>\n<td class="visitor"><span class="timesince" data-timestamp="'+r((l=null!=(l=n.firstTime||(null!=a?a.firstTime:a))?l:i,typeof l===o?l.call(a,{name:"firstTime",hash:{},data:s}):l))+'"></span></td>\n<td class="visitor"><span class="timesince" data-timestamp="'+r((l=null!=(l=n.lastTime||(null!=a?a.lastTime:a))?l:i,typeof l===o?l.call(a,{name:"lastTime",hash:{},data:s}):l))+'"></span></td>\n<td class="visitor">'+(null!=(t=n["if"].call(a,null!=a?a.invitationInfo:a,{name:"if",hash:{},fn:this.program(9,s,0),inverse:this.program(11,s,0),data:s}))?t:"")+'</td>\n<td class="visitor">'+(null!=(t=n["if"].call(a,null!=a?a.invitationInfo:a,{name:"if",hash:{},fn:this.program(13,s,0),inverse:this.program(11,s,0),data:s}))?t:"")+'</td>\n<td class="visitor">'+r((l=null!=(l=n.invitations||(null!=a?a.invitations:a))?l:i,typeof l===o?l.call(a,{name:"invitations",hash:{},data:s}):l))+" / "+r((l=null!=(l=n.chats||(null!=a?a.chats:a))?l:i,typeof l===o?l.call(a,{name:"chats",hash:{},data:s}):l))+'</td>\n<td class="visitor">'+r((l=null!=(l=n.userAgent||(null!=a?a.userAgent:a))?l:i,typeof l===o?l.call(a,{name:"userAgent",hash:{},data:s}):l))+"</td>"},useData:!0})}(),function(){Handlebars.templates=Handlebars.templates||{};Handlebars.templates["users/visitors_collection"]=Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(a,n,e,s){var t=n.helperMissing,l=this.escapeExpression;return'<table id="visitors-list" class="awaiting" border="0">\n<thead>\n<tr>\n    <th class="first">'+l((n.l10n||a&&a.l10n||t).call(a,"Name",{name:"l10n",hash:{},data:s}))+"</th>\n    <th>"+l((n.l10n||a&&a.l10n||t).call(a,"Actions",{name:"l10n",hash:{},data:s}))+"</th>\n    <th>"+l((n.l10n||a&&a.l10n||t).call(a,"Visitor's address",{name:"l10n",hash:{},data:s}))+"</th>\n    <th>"+l((n.l10n||a&&a.l10n||t).call(a,"First seen",{name:"l10n",hash:{},data:s}))+"</th>\n    <th>"+l((n.l10n||a&&a.l10n||t).call(a,"Last seen",{name:"l10n",hash:{},data:s}))+"</th>\n    <th>"+l((n.l10n||a&&a.l10n||t).call(a,"Invited by",{name:"l10n",hash:{},data:s}))+"</th>\n    <th>"+l((n.l10n||a&&a.l10n||t).call(a,"Invitation time",{name:"l10n",hash:{},data:s}))+"</th>\n    <th>"+l((n.l10n||a&&a.l10n||t).call(a,"Invitations / Chats",{name:"l10n",hash:{},data:s}))+"</th>\n    <th>"+l((n.l10n||a&&a.l10n||t).call(a,"Misc",{name:"l10n",hash:{},data:s}))+'</th>\n</tr>\n</thead>\n<tbody id="visitors-container">\n</tbody>\n</table>'},useData:!0})}();