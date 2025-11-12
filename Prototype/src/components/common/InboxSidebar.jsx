import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { 
  X, 
  Mail, 
  MailOpen, 
  Calendar, 
  MessageCircle, 
  AlertCircle,
  CheckCircle,
  Clock,
  Star,
  Trash2,
  Archive
} from 'lucide-react'

const InboxSidebar = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('all')

  // Sample notifications data
  const notifications = [
    {
      id: 1,
      type: 'booking',
      title: 'New Session Booking',
      message: 'Sarah Johnson has booked a 30-minute session for tomorrow at 2 PM.',
      time: '2 minutes ago',
      isRead: false,
      avatar: 'SJ',
      priority: 'high'
    },
    {
      id: 2,
      type: 'review',
      title: 'New Review Received',
      message: 'Michael Chen left a 5-star review for your recent session.',
      time: '1 hour ago',
      isRead: false,
      avatar: 'MC',
      rating: 5
    },
    {
      id: 3,
      type: 'message',
      title: 'Session Follow-up',
      message: 'Emma Davis sent a follow-up message about her career transition.',
      time: '3 hours ago',
      isRead: true,
      avatar: 'ED'
    },
    {
      id: 4,
      type: 'reminder',
      title: 'Upcoming Session Reminder',
      message: 'Your session with Alex Rodriguez starts in 1 hour.',
      time: '5 hours ago',
      isRead: true,
      avatar: 'AR'
    },
    {
      id: 5,
      type: 'system',
      title: 'Profile Update',
      message: 'Your expertise in "Product Management" has been approved.',
      time: '1 day ago',
      isRead: true,
      avatar: null
    }
  ]

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'booking':
        return <Calendar className="w-4 h-4 text-blue-600" />
      case 'review':
        return <Star className="w-4 h-4 text-yellow-500" />
      case 'message':
        return <MessageCircle className="w-4 h-4 text-green-600" />
      case 'reminder':
        return <Clock className="w-4 h-4 text-orange-500" />
      case 'system':
        return <AlertCircle className="w-4 h-4 text-purple-600" />
      default:
        return <Mail className="w-4 h-4 text-gray-600" />
    }
  }

  const filteredNotifications = notifications.filter(notification => {
    if (activeTab === 'unread') return !notification.isRead
    if (activeTab === 'important') return notification.priority === 'high'
    return true
  })

  const unreadCount = notifications.filter(n => !n.isRead).length

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold">Notifications</h2>
            {unreadCount > 0 && (
              <Badge variant="destructive" className="text-xs">
                {unreadCount}
              </Badge>
            )}
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="p-4 border-b">
          <div className="flex gap-2">
            <Button 
              variant={activeTab === 'all' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('all')}
            >
              All
            </Button>
            <Button 
              variant={activeTab === 'unread' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('unread')}
            >
              Unread ({unreadCount})
            </Button>
            <Button 
              variant={activeTab === 'important' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab('important')}
            >
              Important
            </Button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="flex-1 overflow-y-auto">
          {filteredNotifications.length === 0 ? (
            <div className="text-center p-8 text-gray-500">
              <Mail className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p>No notifications found</p>
            </div>
          ) : (
            filteredNotifications.map((notification, index) => (
              <div key={notification.id}>
                <div 
                  className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${
                    !notification.isRead ? 'bg-blue-50 border-l-2 border-l-blue-500' : ''
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Avatar or Icon */}
                    <div className="flex-shrink-0">
                      {notification.avatar ? (
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="text-xs">
                            {notification.avatar}
                          </AvatarFallback>
                        </Avatar>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          {getNotificationIcon(notification.type)}
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {notification.title}
                        </h4>
                        {!notification.isRead && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0" />
                        )}
                        {notification.rating && (
                          <div className="flex items-center gap-1">
                            {[...Array(notification.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                        {notification.message}
                      </p>
                      <p className="text-xs text-gray-400 mt-2">
                        {notification.time}
                      </p>
                    </div>

                    {/* Type Icon */}
                    <div className="flex-shrink-0">
                      {getNotificationIcon(notification.type)}
                    </div>
                  </div>
                </div>
                {index < filteredNotifications.length - 1 && <Separator />}
              </div>
            ))
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t bg-gray-50">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1">
              <CheckCircle className="w-4 h-4 mr-2" />
              Mark All Read
            </Button>
            <Button variant="outline" size="sm" className="flex-1">
              <Archive className="w-4 h-4 mr-2" />
              Archive All
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default InboxSidebar