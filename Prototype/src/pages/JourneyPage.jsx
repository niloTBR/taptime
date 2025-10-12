import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import SectionTitle from '@/components/common/SectionTitle'
import { 
  Calendar, 
  Clock, 
  Star, 
  Users, 
  Target, 
  TrendingUp, 
  PlayCircle, 
  FileText, 
  ExternalLink,
  CheckCircle,
  ArrowRight,
  BookOpen
} from 'lucide-react'
import journeyData from '@/data/journey.json'

const JourneyPage = () => {
  const { 
    hero, 
    stats, 
    upcomingSessions, 
    recentSessions, 
    goals, 
    recommendations, 
    learningPath 
  } = journeyData

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .substring(0, 2)
      .toUpperCase()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <SectionTitle 
            title={hero.title}
            description={hero.subtitle}
            className="mb-12"
          />
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center border-2 border-foreground">
              <CardContent className="p-6">
                <Target className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-semibold">{stats.sessionsCompleted}</div>
                <div className="text-sm text-muted-foreground">Sessions Completed</div>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-foreground">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-semibold">{stats.hoursLearned}h</div>
                <div className="text-sm text-muted-foreground">Hours Learned</div>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-foreground">
              <CardContent className="p-6">
                <Users className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-semibold">{stats.expertsConnected}</div>
                <div className="text-sm text-muted-foreground">Experts Connected</div>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-foreground">
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <div className="text-2xl font-semibold">{stats.goalsAchieved}</div>
                <div className="text-sm text-muted-foreground">Goals Achieved</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl space-y-12">
          
          {/* Upcoming Sessions */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Calendar className="w-6 h-6" />
              Upcoming Sessions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingSessions.map((session) => (
                <Card key={session.id} className="border-2 border-foreground">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={session.expertImage} alt={session.expertName} />
                        <AvatarFallback>{getInitials(session.expertName)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold">{session.sessionTopic}</h3>
                        <p className="text-sm text-muted-foreground">{session.expertName}</p>
                        <p className="text-xs text-muted-foreground">{session.expertTitle}</p>
                        <div className="flex items-center gap-4 mt-3">
                          <span className="text-sm font-medium">{session.scheduledTime}</span>
                          <Badge variant="secondary" className="bg-gray-100">{session.duration}</Badge>
                        </div>
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" className="rounded-full">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Join Meeting
                          </Button>
                          <Button size="sm" variant="outline" className="rounded-full border-2 border-foreground">
                            Reschedule
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Goals Progress */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Target className="w-6 h-6" />
              Your Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {goals.map((goal) => (
                <Card key={goal.id} className="border-2 border-foreground">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">{goal.title}</h3>
                      {goal.status === 'completed' && (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{goal.description}</p>
                    
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{goal.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-foreground h-2 rounded-full" 
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{goal.relatedSessions} sessions</span>
                      <span>{goal.dueDate}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Sessions */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <BookOpen className="w-6 h-6" />
              Recent Sessions
            </h2>
            <div className="space-y-4">
              {recentSessions.map((session) => (
                <Card key={session.id} className="border-2 border-foreground">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={session.expertImage} alt={session.expertName} />
                          <AvatarFallback>{getInitials(session.expertName)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{session.sessionTopic}</h3>
                          <p className="text-sm text-muted-foreground">{session.expertName}</p>
                          <div className="flex items-center gap-4 mt-1">
                            <span className="text-xs text-muted-foreground">{session.completedDate}</span>
                            <div className="flex items-center gap-1">
                              {[...Array(session.rating)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-black text-black" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {session.hasNotes && (
                          <Button size="sm" variant="outline" className="rounded-full border-2 border-foreground">
                            <FileText className="w-4 h-4 mr-1" />
                            Notes
                          </Button>
                        )}
                        {session.hasRecording && (
                          <Button size="sm" variant="outline" className="rounded-full border-2 border-foreground">
                            <PlayCircle className="w-4 h-4 mr-1" />
                            Recording
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Learning Path */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              Learning Path
            </h2>
            <Card className="border-2 border-foreground">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Current Level: {learningPath.currentLevel}</h3>
                    <h4 className="text-sm font-medium mb-2">Completed Modules</h4>
                    <div className="space-y-2 mb-6">
                      {learningPath.completedModules.map((module, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-2">Next: {learningPath.nextMilestone}</h4>
                    <h4 className="text-sm font-medium mb-2">Upcoming Modules</h4>
                    <div className="space-y-2 mb-6">
                      {learningPath.upcomingModules.map((module, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-gray-300 rounded-full" />
                          <span className="text-sm text-muted-foreground">{module}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6" />
              Recommended Next Steps
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendations.map((rec) => (
                <Card key={rec.id} className="border-2 border-foreground">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">{rec.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{rec.description}</p>
                    <Button size="sm" className="rounded-full">
                      {rec.actionLabel}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JourneyPage