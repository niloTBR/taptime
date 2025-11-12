import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { 
  X, 
  Copy, 
  Check,
  MessageCircle,
  Share2,
  Mail,
  ExternalLink
} from 'lucide-react'

const ShareModal = ({ isOpen, onClose, expertName, profileUrl }) => {
  const [copied, setCopied] = useState(false)

  if (!isOpen) return null

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(profileUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(`Check out ${expertName}'s expert profile on TapTime: ${profileUrl}`)
    window.open(`https://wa.me/?text=${text}`, '_blank')
  }

  const handleLinkedInShare = () => {
    const url = encodeURIComponent(profileUrl)
    const title = encodeURIComponent(`${expertName} - TapTime Expert`)
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`, '_blank')
  }

  const handleTwitterShare = () => {
    const text = encodeURIComponent(`Check out ${expertName}'s expert profile on TapTime`)
    const url = encodeURIComponent(profileUrl)
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank')
  }

  const handleEmailShare = () => {
    const subject = encodeURIComponent(`Check out ${expertName}'s TapTime profile`)
    const body = encodeURIComponent(`I thought you'd be interested in ${expertName}'s expert profile on TapTime:\n\n${profileUrl}`)
    window.open(`mailto:?subject=${subject}&body=${body}`)
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full mx-auto shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-lg font-semibold">Share Profile</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Copy Link Section */}
          <div>
            <h4 className="text-sm font-medium mb-3">Copy link to profile</h4>
            <div className="flex gap-2">
              <div className="flex-1 px-3 py-2 bg-gray-50 border rounded-lg text-sm text-gray-600 truncate">
                {profileUrl}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyLink}
                className="px-3 flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Social Sharing Options */}
          <div>
            <h4 className="text-sm font-medium mb-3">Share via</h4>
            <div className="grid grid-cols-2 gap-3">
              {/* WhatsApp */}
              <button
                onClick={handleWhatsAppShare}
                className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium">WhatsApp</span>
              </button>

              {/* LinkedIn */}
              <button
                onClick={handleLinkedInShare}
                className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <Share2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium">LinkedIn</span>
              </button>

              {/* Twitter/X */}
              <button
                onClick={handleTwitterShare}
                className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium">Twitter</span>
              </button>

              {/* Email */}
              <button
                onClick={handleEmailShare}
                className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium">Email</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShareModal