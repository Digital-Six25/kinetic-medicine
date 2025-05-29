import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  CheckCircle,
  Clock,
  Heart,
  Target,
  Users,
  Zap,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#F26920] to-[#F8A21F] text-white py-16 pt-20">
        <div className="container mx-auto px-4 text-center">
          <Badge className="bg-white/20 text-white mb-4">
            NDIS Registered Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Exercise Physiology Services
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Comprehensive, evidence-based exercise programs designed to help
            NDIS participants achieve their health and mobility goals.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#F26920] hover:bg-gray-100"
          >
            Book Your Assessment
          </Button>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Individual Exercise Programs */}
            <Card className="border-2 hover:border-[#F26920] transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#F26920] rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#323739]">
                  Individual Exercise Programs
                </h3>
                <p className="text-gray-600 mb-4">
                  Personalized one-on-one exercise sessions tailored to your
                  specific disability, goals, and NDIS funding allocation.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Comprehensive initial assessment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Goal-focused program design
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Regular progress monitoring
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Equipment and home program guidance
                  </li>
                </ul>
                <Button className="w-full bg-[#F26920] hover:bg-[#F8A21F]">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Chronic Pain Management */}
            <Card className="border-2 hover:border-[#F26920] transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#F26920] rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#323739]">
                  Chronic Pain Management
                </h3>
                <p className="text-gray-600 mb-4">
                  Evidence-based exercise interventions to help manage chronic
                  pain conditions and improve quality of life.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Pain reduction strategies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Functional capacity improvement
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Self-management education
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Graded exposure therapy
                  </li>
                </ul>
                <Button className="w-full bg-[#F26920] hover:bg-[#F8A21F]">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Psychosocial Support */}
            <Card className="border-2 hover:border-[#F26920] transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#F26920] rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#323739]">
                  Psychosocial Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Exercise programs that support mental health and social
                  participation through structured physical activity.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Mental health support through exercise
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Social engagement opportunities
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Confidence and self-esteem building
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Routine and structure development
                  </li>
                </ul>
                <Button className="w-full bg-[#F26920] hover:bg-[#F8A21F]">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Sports & Exercise Physiology */}
            <Card className="border-2 hover:border-[#F26920] transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#F26920] rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#323739]">
                  Sports & Exercise Physiology
                </h3>
                <p className="text-gray-600 mb-4">
                  Specialized programs for NDIS participants interested in
                  adaptive sports and competitive activities.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Adaptive sports training
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Performance optimization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Injury prevention strategies
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Competition preparation
                  </li>
                </ul>
                <Button className="w-full bg-[#F26920] hover:bg-[#F8A21F]">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Mobility & Functional Training */}
            <Card className="border-2 hover:border-[#F26920] transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#F26920] rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#323739]">
                  Mobility & Functional Training
                </h3>
                <p className="text-gray-600 mb-4">
                  Focused programs to improve daily living activities, mobility,
                  and functional independence.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Activities of daily living training
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Balance and coordination
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Strength and endurance building
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Assistive device training
                  </li>
                </ul>
                <Button className="w-full bg-[#F26920] hover:bg-[#F8A21F]">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            {/* Allied Health Practitioner Services */}
            <Card className="border-2 hover:border-[#F26920] transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#F26920] rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#323739]">
                  Allied Health Collaboration
                </h3>
                <p className="text-gray-600 mb-4">
                  Coordinated care with other allied health practitioners to
                  provide comprehensive support.
                </p>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Multidisciplinary team approach
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Care plan coordination
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Progress reporting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-[#F26920] mr-2 flex-shrink-0" />
                    Referral pathways
                  </li>
                </ul>
                <Button className="w-full bg-[#F26920] hover:bg-[#F8A21F]">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#323739] mb-4">
              How Our Services Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, structured approach to getting you started with exercise
              physiology
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F26920] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-[#323739] mb-2">
                Initial Consultation
              </h3>
              <p className="text-gray-600 text-sm">
                Free consultation to discuss your NDIS plan, goals, and how we
                can help.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F26920] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-[#323739] mb-2">
                Comprehensive Assessment
              </h3>
              <p className="text-gray-600 text-sm">
                Detailed evaluation of your current abilities, limitations, and
                specific needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F26920] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-[#323739] mb-2">
                Program Development
              </h3>
              <p className="text-gray-600 text-sm">
                Custom exercise program designed specifically for your goals and
                abilities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#F26920] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="font-semibold text-[#323739] mb-2">
                Ongoing Support
              </h3>
              <p className="text-gray-600 text-sm">
                Regular sessions, progress monitoring, and program adjustments
                as needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#F26920] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your free consultation today and discover how exercise
            physiology can help you achieve your NDIS goals.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-[#F26920] hover:bg-gray-100 font-semibold"
            >
              Book Free Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#F26920]"
            >
              Download Service Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
